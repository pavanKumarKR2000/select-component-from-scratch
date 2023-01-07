import React, { useEffect, useState } from 'react'


const Select = ({ value, onChange, options }) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState(options);

  

    useEffect(() => {

        if (value) {
            setFilteredOptions(options.filter((filteredOption)=>filteredOption.label!==value.label));
        }
        else {
            setFilteredOptions(options);
        }
        
    }, [value]);

    const clearValue = () => {
        onChange(undefined);
    }

    const selectOption = (option) => {
        onChange(option);
    }

  return (
      <div tabIndex={0}  onClick={()=>setIsOpen((prev)=>!prev)} onBlur={()=>setIsOpen(false)} className='text-lg relative p-2 flex items-center gap-1 bg-white outline outline-1 outline-slate-400 rounded-md min-w-[400px]  focus-within:outline-blue-500  transition duration-300  focus-within:outline-none'>
          <div className='flex-grow text-center pl-11'>{value?value.label:<span className='text-slate-600'>Select...</span>}</div>
          <div className={`text-slate-400 hover:text-slate-600 cursor-pointer ${value?'block':'hidden'}`} onClick={(e) => { e.stopPropagation();  clearValue(); setIsOpen(false);  }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className=' text-slate-400 self-stretch '>|</div>
          <div className='text-slate-400 hover:text-slate-600 cursor-pointer' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <div className='absolute top-[115%] left-0 w-full bg-white shadow-md rounded-md  max-h-[250px] overflow-y-auto'>
              <ul>
                  {
                      filteredOptions.map((option) => <li key={option.label} onClick={(e) => { e.stopPropagation(); selectOption(option); setIsOpen(false);}} className={`text-center cursor-pointer p-1 hover:bg-blue-100  ${isOpen?'block':'hidden'}`}>{option.label}</li>)
                  }
              </ul>
          </div>
      </div>
  )
}

export default Select;