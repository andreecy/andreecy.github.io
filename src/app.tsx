import { useState } from 'preact/hooks'
import { Icon } from './Icon'

export function App() {

  return (
    <>
      <div class="bg-gray-800 flex min-h-screen items-center">
        <div className="mx-auto text-center">
          <div className="flex justify-center mb-4">
            <img class='rounded-full' src="https://media-exp1.licdn.com/dms/image/C5603AQHO6jrPobDMuA/profile-displayphoto-shrink_200_200/0/1605726138540?e=1671667200&v=beta&t=7uKe_E7sQSBK_G-nevPWhzaXa7lIibDFj9XMVkHITHI" alt="Andree Christian Yulianto" />
          </div>
          <h1 class="text-3xl lg:text-6xl text-blue-200 font-bold mb-3">Andree Christian Yulianto</h1>
          <p class='text-xl lg:text-3xl text-white mb-3'>Software and Game Developer</p>

          <div class='flex space-x-2 justify-center text-white'>
            <a class='hover:text-purple-400' href="https://github.com/andreecy">
              <Icon icon='uil:github' />
            </a>
            <a class='hover:text-purple-400' href="https://andreecy.itch.io/">
              <Icon icon='cib:itch-io' />
            </a>
            <a class='hover:text-purple-400' href="https://www.linkedin.com/in/andree-christian-yulianto-381378116/">
              <Icon icon='uil:linkedin' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
