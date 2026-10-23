import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Hero from './components/hero.jsx'
import Product from './components/product.jsx'
import Footer from './components/footer.jsx'
import Api from './components/appi.jsx'

function App() {

  return (
    <>

    {/* <Api></Api> */}

    <Header 
          header={'mx-[5px] sm:mx-[10px] lg:mx-[20px] mt-[20px] flex items-center'}
          svg={'lg:mx-[80px]'}
          burger={'block sm:hidden'}
          nav={'text-right ml-auto lg:mr-[80px]'}
          ul={'hidden sm:block sm:flex sm:gap-x-[10px] lg:gap-x-[20px]'}
          a={'text-[16px] font-bold lg:font-medium lg:text-[20px] font-mono lg:font-normal hover:text-[#6C5CE7] duration-400'}
          >
    </Header>
    <Hero
          main={'my-[50px] mx-[60px] flex-col sm:flex sm:flex-row'}
          svg={'mr-[30px] hidden sm:block w-[500px] h-[200px] sm:w-[600px] sm:h-[430px]'}
          div={'pt-[50px] text-center mx-auto sm:text-left sm:pt-[100px]'} 
          h2={'text-[20px] font-extrabold sm:text-[26px] md:text-[26px] lg:text-[32px] text-[#5546C7] font-serif sm:font-bold mb-[10px]'}
          p={'text-[11px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-medium mb-[50px]'}
          a={'uppercase md:ml-auto text-white font-sans px-4 md:px-6 py-2.5 bg-[#6C5CE7] font-medium rounded-[10px] hover:bg-[#5546C7] duration-300'}
          >
    </Hero>
    <Product
          cartModalClass="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-[10px]"
          cartContentClass="w-full max-w-[420px] max-h-[85vh] bg-white rounded-[16px] p-[14px] shadow-xl flex flex-col"
          cartHeaderClass="flex items-center justify-between pb-[10px] border-b border-gray-200"
          cartTitleClass="text-[20px] font-bold text-gray-900"
          cartCloseClass="w-[30px] h-[30px] rounded-[8px] flex items-center justify-center text-[24px] text-gray-500 cursor-pointer hover:bg-gray-100"
          cartListClass="flex flex-col gap-[7px] py-[10px] overflow-y-auto"
          cartItemClass="flex items-center gap-[8px] w-full min-h-[60px] p-[6px] rounded-[9px] bg-gray-50 border border-gray-100"
          cartImageClass="w-[48px] h-[48px] rounded-[7px] object-cover shrink-0"
          cartInfoClass="flex flex-col flex-1 min-w-0"
          cartNameClass="text-[13px] font-medium text-gray-900 truncate"
          cartPriceClass="text-[13px] font-semibold text-gray-700"
          cartQuantityClass="flex items-center gap-[4px] shrink-0"
          cartMinusClass="w-[24px] h-[24px] rounded-[5px] bg-gray-200 text-[15px] flex items-center justify-center cursor-pointer hover:bg-gray-300"
          cartCountClass="w-[20px] text-center text-[13px] font-medium"
          cartPlusClass="w-[24px] h-[24px] rounded-[5px] bg-gray-200 text-[15px] flex items-center justify-center cursor-pointer hover:bg-gray-300"
          cartFooterClass="flex items-center justify-between pt-[10px] mt-[2px] border-t border-gray-200"
          cartTotalClass="text-[14px] font-medium text-gray-700"
          cartTotalPriceClass="text-[17px] font-bold text-gray-900"
          cartOrderButtonClass="w-full mt-[10px] h-[40px] rounded-[8px] bg-orange-500 text-white text-[14px] font-semibold cursor-pointer hover:bg-orange-600"
          corzinaImg="w-[50x] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[100px] lg:h-[80px] fixed bottom-[3%] right-[-12%] sm:bottom-[4%] sm:right-[4%] md:bottom-[5%] md:right-[5%] cursor-pointer flex items-center justify-center"
          priceEditInp="w-full px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm lg:py-3 lg:text-base mb-4 bg-white border border-gray-200 rounded-lg outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
          h2EditInp="w-full px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm lg:py-3 lg:text-base mb-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
          imgEditInp="w-full px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm lg:py-3 lg:text-base mb-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
          changeBtn={'cursor-pointer absolute top-2 right-2 z-10 px-1.5 py-1 text-[10px] sm:px-2 sm:py-1 sm:text-xs rounded-md bg-white/90 border border-gray-200 text-gray-500 shadow-sm hover:bg-black hover:text-white hover:border-black transition-all duration-200'}
          deleteBtn={'cursor-pointer absolute top-2 left-2 z-10 px-1.5 py-1 text-[10px] sm:px-2 sm:py-1 sm:text-xs rounded-md bg-red/90 border border-red-400 text-red-500 shadow-sm hover:bg-red-400 hover:text-white hover:border-red-400 transition-all duration-200'}
          AdminModeBTN={'cursor-pointer hover:text-blue-400 duration-300 text-blue-600 uppercase underline ml-10 font-bold float-right'}
          btnAddProduct={"cursor-pointer w-full sm:w-auto px-3 py-2 sm:px-5 sm:py-2 text-sm sm:text-base rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"}
          filter={'mx-[15px] sm:mx-[30px] lg:mx-[60px] mt-[40px] mb-[25px] flex flex-col sm:flex-row sm:items-center gap-[15px]'}
          title={'text-[24px] sm:text-[28px] lg:text-[32px] mx-auto text-center mt-[20px] md:mt-[100px] font-bold font-mono text-[#5546C7] mb-[15px]'}
          search={'w-full sm:w-[250px] lg:w-[320px] px-[15px] py-[10px] border border-gray-200 rounded-[10px] outline-none focus:border-[#6C5CE7] duration-300'}
          filters={'flex flex-wrap gap-[8px]'}
          filterButton={'cursor-pointer px-[12px] py-[8px] rounded-[8px] border border-gray-200 text-[12px] sm:text-[13px] font-medium hover:bg-[#6C5CE7] hover:text-white hover:border-[#6C5CE7] duration-300'}
          section={'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] sm:gap-[20px] mx-[15px] sm:mx-[30px] lg:mx-[60px]'}
          article={'group relative flex flex-col rounded-[15px] border border-gray-200 p-[15px] sm:p-[20px] hover:shadow-lg transition-shadow duration-300'} 
          img={'w-full h-[170px] sm:h-[180px] lg:h-[200px] object-contain mb-[10px] group-hover:scale-105 transition-transform duration-300'} 
          h2={'text-[14px] sm:text-[15px] lg:text-[16px] font-semibold font-sans line-clamp-2 min-h-[42px] mb-[8px]'} 
          price={'text-[17px] sm:text-[18px] font-bold text-[#6C5CE7] mb-[10px]'} 
          button={'w-full py-[8px] px-[12px] bg-[#6C5CE7] text-white rounded-[8px] font-medium hover:bg-[#5546C7] duration-300 cursor-pointer'}
          modalClass={"mb-5 fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 overflow-y-auto"}
          modalBoxClass={"w-full max-w-lg bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto "}
          titleClass={"text-xl sm:text-2xl font-bold text-gray-800 "}
          inputClass={"w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm sm:text-base transition "}
          buttonClass={"cursor-pointer w-full py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 active:scale-[0.98] transition "}
          closeClass={"cursor-pointer w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-red-500 transition "}
      >
    </Product>
    <Footer
  footer={"mt-20 bg-[#f8f7ff] text-gray-700"}
  container={"mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10"}
  logo={"text-3xl font-extrabold tracking-tight text-gray-900"}
  description={"mt-4 max-w-[280px] text-sm leading-7 text-gray-500"}
  title={"mb-5 text-lg font-bold text-gray-900"}
  link={"space-y-3 text-sm text-gray-500 [&_a]:transition-colors [&_a:hover]:text-[#6C5CE7]"}
  social={"mt-5 flex flex-wrap gap-4 text-sm font-medium text-[#6C5CE7]"}
  bottom={"flex flex-col items-center justify-between gap-3 border-t border-gray-200 px-5 py-5 text-center text-sm text-gray-500 sm:flex-row lg:px-10"}
  copyright={"text-sm"}
    >
    </Footer>
    

    
    </>
  )
}

export default App
