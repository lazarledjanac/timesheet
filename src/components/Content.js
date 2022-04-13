import React from 'react';
import Footer from "./Footer";
import Header from "./Header";

function Content({children}) {
  return (
    <div class="container">
      <Header/>
        <div class="wrapper">
		    <section class="content">
                {children}    
            </section>			
		</div>
      <Footer/>
    </div>
  
  );
}

export default Content;