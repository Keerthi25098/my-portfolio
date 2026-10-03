exports.handler = async (event, context) => {
    // CORS Headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: 'OK' };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    try {
        const payload = JSON.parse(event.body || '{}');
        const { name, email, subject, message, enquiry_id, timestamp } = payload;

        const notificationEmail = process.env.NOTIFICATION_EMAIL || 'keerthikeerthi32155@gmail.com';
        const resendApiKey = process.env.RESEND_API_KEY;

        console.log(`[Send-Enquiry Function] Processing enquiry #${enquiry_id || 'N/A'} from ${name} (${email})`);

        // If Resend API key is configured, send transactional email via API
        if (resendApiKey) {
            const response = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${resendApiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: 'Keerthika KT Portfolio <portfolio@resend.dev>',
                    to: [notificationEmail],
                    subject: `⚡ New Enquiry: ${subject || 'General Contact'} - from ${name}`,
                    html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
              <h2 style="color: #ec4899; margin-top: 0;">New Contact Enquiry Submitted</h2>
              <p>You received a new message via your portfolio landing page!</p>
              
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 120px;">Sender Name:</td>
                  <td style="padding: 8px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
                  <td style="padding: 8px 0;">${subject || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Timestamp:</td>
                  <td style="padding: 8px 0;">${timestamp || new Date().toISOString()}</td>
                </tr>
              </table>

              <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #8b5cf6; margin: 20px 0;">
                <h4 style="margin: 0 0 10px 0; color: #475569;">Message:</h4>
                <p style="margin: 0; white-space: pre-wrap; color: #0f172a;">${message}</p>
              </div>

              <p style="font-size: 12px; color: #94a3b8; margin-bottom: 0;">
                Enquiry ID: ${enquiry_id || 'Local-ID'} | Sent from Keerthika KT Portfolio
              </p>
            </div>
          `,
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('[Resend Error]', errorText);
            }
        } else {
            console.log('[Send-Enquiry Function] RESEND_API_KEY not set in environment. Saved enquiry to database successfully.');
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                message: 'Notification trigger processed and enquiry saved to database.',
            }),
        };
    } catch (error) {
        console.error('[Send-Enquiry Error]', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
