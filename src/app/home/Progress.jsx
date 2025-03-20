import { ProgressDetails } from "./ProgressDetails";
export default function Progress () {
  return (
   
      <section className="screen-size flex items-center justify-between flex-wrap gap-10 my-10 rounded-lg ">
        {ProgressDetails.map((value,i)=>{
          return(
            <div key={i} className=" space-y-4 px-10 text-center border-r border-[#909090] nth-of-type-[4]:border-none ">
        <h5 className="text-5xl font-semibold gray">{value.count}</h5>
          <p className="title_2 gray">{value.topic}</p>
        </div>
          )
        })}
      </section>
  );
}
