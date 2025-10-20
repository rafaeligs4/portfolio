
export const ExperienceContainer = (
info:{
    dateWork: string[],
    nameEnterprise: string,
    descriptionJob: string
})=>{
    return <>
    <div className="group relative flex flex-col items-center justify-center gap-4 p-6 bg-white dark:bg-[#112240] rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
    <p>{info.nameEnterprise}</p>
    <div>
        <span>{info.descriptionJob}</span>
    </div>
    </div>
    
    </>
}