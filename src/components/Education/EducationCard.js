import React from "react";
export default function EducationCard(args) {
    const text_container = (schoolname, schooldeets,timeframe) => {
        return(
            <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{schoolname}</h5>
      <p class="text-gray-700 text-base mb-4">
        {schooldeets}
      </p>
      <p class="text-gray-600 text-xs">{timeframe}</p>
    </div>
        )
    }
    return(
        <div class="flex justify-center mb-2">
             <div class="flex flex-col md:flex-row  rounded-lg bg-white dark:bg-neutral shadow-lg">
                { !args.flip?
                
                    <>
                    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={args.logo} alt="" />
                    {text_container(args.schoolname, args.schooldeets, args.timeframe)}
                    </>
                : 
                    <>
                        
                        {text_container(args.schoolname, args.schooldeets, args.timeframe)}
                        <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-b-lg md:rounded-none md:rounded-r-lg" src={args.logo} alt="" />
                    </>
        }
    </div>
</div>
    )
}