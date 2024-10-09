const LoginForm = () => {
    return (
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="correo@ejemplo.com" />
  
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="*******" />
  
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Recordar usuario</label>
          <a href="#" className="Contra">Olvido su contraseña?</a>
        </div>
  
        <button className="loginBoton" type="submit">Iniciar sesion</button>
  
        <div className="link">
          No tienes una cuenta? <a href="#">Registrate</a>
        </div>
      </form>
    );
  };
  
  export default LoginForm;