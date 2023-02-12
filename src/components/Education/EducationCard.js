import React from "react";
export default function EducationCard(args) {
    const text_container = (schoolname, schooldeets,timeframe) => {
        return(
            <div class="p-6 col-span-2 justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{schoolname}</h5>
      <p class="text-gray-700 text-base mb-4">
        {schooldeets}
      </p>
      <p class="text-gray-600 text-xs">{timeframe}</p>
    </div>
        )
    }
    return(
             <div class="sm:flex md:grid md:grid-cols-3  rounded-lg bg-white dark:bg-neutral shadow-lg">
                { args.flip?
                
                   
                     <>
                        
                     {text_container(args.schoolname, args.schooldeets, args.timeframe)}
                     <div className="col-span-1 flex items-center">adad
                         <img class=" w-fit h-fit md:h-auto object-cover md:w-48 rounded-b-lg md:rounded-none md:rounded-r-lg" src={args.logo} alt="" />
                     </div>
                     
                 </>
                : 
                <>
                <div className="col-span-1 flex items-center">
                <img className="  w-fit h-fit md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={args.logo} alt="" />
                </div>
                {text_container(args.schoolname, args.schooldeets, args.timeframe)}
                </>
        }
    </div>

    )
}