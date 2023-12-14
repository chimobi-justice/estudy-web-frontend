import ConfirmEmailImage from '../../assets/images/confirm-email.gif';

const ConfirmEmail = () => {
  return (
    <div
      style={{
        width: '60%',
        margin: '5em auto',
        textAlign: 'center',
      }}
    >
      <div style={{marginLeft: '22rem'}}>
        <img
          src={ConfirmEmailImage}
          alt="Email animation"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'contain',
          }}
        />
      </div>
      <p
        variant="subtitle2"
        style={{
          marginBottom: 4,
          fontSize: '1rem !important',
          lineHeight: '1.3em',
        }}
      >
        Thank you for signing up! A confirmation email has been sent to your
        registered email address. Please follow the instructions in the email to
        complete the sign-up process.
      </p>
    </div>
  );
};

export default ConfirmEmail;
