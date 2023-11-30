import React from 'react';

function LoginPage() {
 return (
   <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br ">
     <form className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5" action="">
       <h1 className="text-center text-3xl">Login</h1>
       <div className="flex flex-col space-y-2">
         <label className="text-sm font-light" htmlFor="email">Documento</label>
         <input className="w-96 px-3 py-2 rounded-md border border-slate-400" type="email" placeholder="Numero Documento" name="email" id="email" />
       </div>
       <div className="flex flex-col space-y-2">
         <label className="text-sm font-light" htmlFor="password">Contraseña</label>
         <input className="w-96 px-3 py-2 rounded-md border border-slate-400" type="password" placeholder="Cotraseña" name="password" id="password" />
       </div>
       <div>
         <input type="checkbox" name="remember" id="remember" />
         <label className="text-sm font-light" htmlFor="remember">Recordarme</label>
       </div>
       <button className="w-full px-10 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in" type="submit">
         Ingresar
       </button>
       <p className="text-right"><a className="text-blue-600 text-sm font-light hover:underline" href="https://www.kindacode.com">¿Olvido la Contraseña?</a></p>
     </form>
   </div>
 );
}

export default LoginPage;