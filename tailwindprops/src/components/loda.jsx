import React from 'react'

function Loda({username,profession="enterpreneur"}) {
  return (
    <>
    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
       src="https://images.pexels.com/photos/28995593/pexels-photo-28995593/free-photo-of-scenic-mountain-road-in-trentino-south-tyrol.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        {profession} engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
</>
  )
}

export default Loda