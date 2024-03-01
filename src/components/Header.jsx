export const Header = () => {
  return (
    <div className="h-screen w-screen grid place-items-center bg-blue-950 border-4   ">
      
      <header className="bg-white w-3/3 h-3/3">
        <h1 className="text-sm grid place-items-center font-bold text-[60px] text-orange-500 pt-10 ">HELEN PARKER</h1>
       
        <h2 className="text-base sm grid place-items-center font-sans pt-3 text-[20px] ">DESIGN & PHOTOGRAPHY</h2>
        

        <div className="grid grid-cols-3 ga3 py-44 sm:grid place-items-center">
          <div className="border-2 border-orange-500 px-3 pt-2 cursor-pointer  hover:bg-orange-200">
          <i className="i-mdi-phone"></i>
            <p>3213215100</p>
          </div>
          
         <div className="border-2 border-orange-500 font-sans px-3 pt-2 cursor-pointer hover:bg-orange-200" >
         <i className="i-lucide-mail"></i>
         <p>jeso_sar17@hotmail.com </p>
         </div>
         
        <div className="border-2 border-orange-500 font-sans px-3 pt-2 cursor-pointer  hover:bg-orange-200">
        <i className="i-gg-website"></i>
         <p>mysite.com</p>
        </div>
        </div>
      </header>
    </div>
  );
};
