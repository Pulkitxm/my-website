import React from "react";
export default function EducationCard(args) {
    const text_container = (schoolname, schooldeets,timeframe) => {
        return(<>
                         <div className="flex-row">
                            <h3 className=" text-xl md:text-2xl font-medium mb-2">{schoolname}</h3>
                        </div>
            <div className="p-6 flex-row justify-start">
      <p className="text-base text-justify mb-4">
        {schooldeets}
      </p>
      <p className="text-xs">{timeframe}</p>
    </div>
    </>
        )
    }
    return(
             <div class="  rounded-lg " >
                { args.flip?
                
                   
                     <>
                        {/* <div className="flex-row">
                            <h3 className=" text-xl md:text-2xl font-medium mb-2">{args.schoolname}</h3>
                        </div> */}
                     {text_container(args.schoolname, args.schooldeets, args.timeframe)}
                     <div className=" items-center">
                         <img class=" w-fit h-fit md:h-auto object-cover md:w-48 rounded-b-lg md:rounded-none md:rounded-r-lg" src={args.logo} alt="" />
                     </div>
                     
                 </>
                : 
                <>
                        
                <div className=" items-center">
                <img className="inline-flex w-fit h-fit md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={args.logo} alt="" />
                </div>
                {text_container(args.schoolname, args.schooldeets, args.timeframe)}
                </>
        }
    </div>

    )
}