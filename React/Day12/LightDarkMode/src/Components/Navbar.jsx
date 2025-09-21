import { useState } from "react"


export function Navbar()
{

    const[showProfile , setShowProfile] = useState(false)
    const[showHome , setShowHome] = useState(false)
    const[showAbout , setShowAbout] = useState(false)
    const[darkmode ,setDarkmode] = useState(true)
    return (
            <>
        <div className={"h-[100vh] " + (darkmode ? "bg-white" : "bg-black")}>
             <div className={"w-[100vw] h-[8vh] bg-black text-white flex justify-between items-center p-[20px]  " }>
                <p className="text-2xl">Logo</p>
                <button onClick={() =>{setDarkmode(!darkmode)}}>{darkmode ? "🌚" : "☀️"}</button>

                <div className="flex gap-[50px] mr-[100px] ">
                    <button className="cursor-pointer" onMouseEnter={() =>{setShowProfile(true)}} onMouseLeave={() => {setShowProfile(false)}} >Profile</button>
                    <button className="cursor-pointer" onMouseEnter={() =>{setShowAbout(true)}} onMouseLeave={() =>{setShowAbout(false)}}>About</button>
                    <button className="cursor-pointer" onMouseEnter={() =>{setShowHome(true)}} onMouseLeave={() =>{setShowHome(false)}} >Home</button>
                </div>
           </div>
           
            
              {showProfile && <div className="bg-amber-400 text-black h-[90vh] w-[20vw] overflow-hidden ml-[70vw]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolor, nisi, inventore neque expedita nesciunt qui consequuntur quasi facilis eaque dolorum sint, atque asperiores vitae nam voluptate accusantium dolorem suscipit.
                    Repudiandae nisi, maxime hic modi vel perspiciatis quaerat placeat possimus deserunt corrupti dignissimos unde sunt beatae aliquid libero ipsam, quibusdam perferendis molestias velit facilis corporis harum aliquam ratione culpa! Ad.
                    Quod maiores, dolores aut nam placeat alias nemo facere tempore ipsam, adipisci modi minus eligendi tenetur sit beatae illum odio fuga magnam minima non dolore illo hic sed ex! Voluptatibus.
                    Aliquid maxime doloribus iste fugiat libero commodi assumenda dolore, ea praesentium. Aliquam fugit tempore expedita odit, accusamus temporibus earum, sequi beatae laboriosam eaque hic labore ullam commodi quibusdam nisi. Sint.
                    Incidunt accusamus consequatur inventore earum numquam. Tenetur autem, similique, quisquam unde, eius distinctio iure error pariatur accusamus suscipit quidem voluptas quia! Dolorum soluta nesciunt aspernatur saepe, tenetur laboriosam earum voluptas.
                    Expedita voluptatum ut perferendis quos suscipit error amet a repudiandae nemo eum facilis explicabo, quidem, ipsum vel iusto itaque obcaecati ducimus at porro voluptatem nostrum labore pariatur! Eligendi, harum possimus.
                    Eveniet dolorem asperiores quas, voluptatem consectetur dignissimos officia aliquid, minus cum temporibus distinctio blanditiis corporis veritatis expedita sed. Sit natus aliquam iste sint at architecto repudiandae veritatis cupiditate eum dolorum?
                    Ipsum eos velit, iusto eligendi libero voluptatum incidunt error minima cum, consectetur odit minus autem. Corrupti atque aperiam, molestias praesentium culpa, voluptatem totam adipisci placeat corporis, accusantium sunt quam inventore!
                    Nesciunt sequi vitae minima. Enim dignissimos, illum optio esse adipisci perspiciatis sequi repellendus? Voluptates nesciunt necessitatibus consequatur minima voluptatum debitis eum in beatae vero. Nostrum quae labore dolor itaque perspiciatis?
                    Veritatis a nobis voluptatem voluptatibus cum laudantium velit officia provident deleniti nostrum magnam consequuntur consequatur sequi tempore, corrupti dolores maxime id consectetur similique fugit qui recusandae tenetur blanditiis maiores. Harum.
                </div>}

               {showAbout && <div className="bg-amber-900 text-white h-[90vh] w-[20vw] overflow-scroll ml-[80vw] p-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum sed cum dicta modi unde magni beatae obcaecati. Dolorum nesciunt rerum ipsa illo nisi itaque nulla pariatur esse accusamus atque?
                Dolor quibusdam delectus sit atque facilis eaque iste voluptate quis natus consequatur possimus reiciendis, ipsa quasi aspernatur quisquam repellendus quas nam dolorem dignissimos, minima fuga. Perspiciatis doloremque eius ut quo!
                Maiores rem dignissimos, accusantium quod et sapiente quisquam. Pariatur necessitatibus error itaque minima deserunt. Iure voluptatum accusantium hic, delectus doloremque rerum odio magni numquam, labore, molestiae saepe sed impedit vero.
                Similique alias mollitia non nisi velit numquam facilis laborum ad suscipit dicta illum facere odit accusamus iusto ratione, laboriosam voluptas nesciunt. Perspiciatis omnis libero nulla asperiores, quis architecto neque reiciendis.
                Non voluptates incidunt harum distinctio quo ad nam assumenda nulla deleniti tempora! Vel repellendus magnam iste recusandae officiis. Repudiandae doloribus deserunt ad nihil sunt corporis reprehenderit, molestiae laudantium odit. Odio.
                Aliquam voluptatibus repudiandae minus iusto illo quisquam cumque facere nemo quos ut modi in totam molestias itaque libero quod repellat provident, dolor architecto necessitatibus excepturi dicta voluptatem ea. Sequi, alias.   
                </div>}




                {showHome && <div  className="bg-cyan-800 w-[15vw] h-[90vh] p-[10px] text-amber-950 ml-[85vw]"> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias dolore blanditiis magni placeat cumque sit accusantium rem quaerat tenetur. Possimus corporis quibusdam debitis velit, ex deleniti. Soluta modi accusantium id.
                    Suscipit provident repellendus fuga quam recusandae, temporibus libero. Voluptatem eius optio, id neque, provident saepe itaque facere tenetur repellat quam sapiente! Quo, explicabo! Minima ratione cupiditate perspiciatis, quas eos quod?
                    Alias voluptatibus animi hic velit totam corrupti soluta assumenda repellat, aperiam neque cumque facere esse laudantium libero odio distinctio reprehenderit fugiat id doloremque, harum excepturi obcaecati delectus, cupiditate consequatur. Porro!
                    Necessitatibus fugit asperiores nisi ad qui quam illo. Tempore in soluta dignissimos consectetur voluptatum porro? Id fuga, soluta sit suscipit reprehenderit tempore cum, incidunt enim rem atque, praesentium optio odit!
                    Sequi beatae accusamus ea facere, debitis asperiores repellat fugiat odit eaque minus architecto animi impedit magni assumenda. Soluta architecto quaerat, asperiores veritatis eaque libero eius reprehenderit distinctio voluptatibus cupiditate earum.
                </div>}
        </div>
            </>
    )
}