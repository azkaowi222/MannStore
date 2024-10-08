export default function RememberForgot() {
  return (
    <div className="remember-forgot">
      <div className="remember">
        <label>
          <input type="checkbox" /> Remember me
        </label>
      </div>
      <div className="remember">
        <a href="#">Forgot password?</a>
      </div>
    </div>
  );
}
