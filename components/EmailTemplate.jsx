export const EmailTemplate = ({OTP}) => (
    <div>
    
    <img src="https://one-day-build.vercel.app/logo.png" />
    <div>Hello!</div>
    <p>You recently requested a password reset for your account. To proceed with the reset, please use the following verification code:</p>
    <h1>{OTP}!</h1>
    <p>If you did not initiate this request, no further action is required. Your account is secure.</p>
    Thank you for using <b>OneDay Build</b>
    <p>Best regards,</p>
    <p>Dan</p>
    </div>
);