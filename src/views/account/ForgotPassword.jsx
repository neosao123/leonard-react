import { lazy } from "react";
const ForgotPasswordForm = lazy(() =>
  import("../../components/account/ForgotPasswordForm")
);

const ForgotPasswordView = () => {
  const onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  return (
    <div className="container vertical-margin">
      <div className="row justify-content-md-center ">
        <div className="col-md-5 p-5 border rounded-4 shadow cat-bg-2">
          <h4 className="text-center mb-4">Forgot Password</h4>
          <ForgotPasswordForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordView;
