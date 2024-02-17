import React from 'react'
import { Footer, FooterLinkGroup } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs'
export default function FooterCom() {
  return (
     <Footer container className = 'border border-t-8 border-cyan-400'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                <Link to = "/" className='self-center whitespace-nowrap text-lg sm:text-xl
         font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... rounded-lg text-white'>Ashmit's</span>
            Blog
        </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title = 'About'/>
                    <FooterLinkGroup col>
                      
                        <Footer.Link
                           href= '/about'
                           target = '_blank'
                           
                           >
                        Ashmit's Blog
                        </Footer.Link>
                    </FooterLinkGroup>
                    </div>
                    <div>
                    <Footer.Title title = 'Follow me'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                           href= 'https://github.com/wellbowledash'
                           target = '_blank'
                           
                           >
                        Github
                        </Footer.Link>
                
                        <Footer.Link
                           href= 'https://www.linkedin.com/in/ashmit-raj-37278b235/'
                           target = '_blank'
                           
                           >
                        Linkedin
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title = 'Legal'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                           href= ''
                           target = '_blank'
                           
                           >
                        Privacy Policy
                        </Footer.Link>
                
                        <Footer.Link
                           href= ''
                           target = '_blank'
                           
                           >
                       Terms and conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                 

                </div>
            </div>
            <Footer.Divider/>
                    <div className='w-full sm:flex sm:items-center sm:justify-between'>
                        <Footer.Copyright href='#' by="Ashmit's Blog" year = {new Date().getFullYear()} />
                        <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                            <Footer.Icon href = 'https://www.instagram.com/ashmitraj96/' target='_blank' icon = {BsInstagram}/>
                            <Footer.Icon href = 'https://twitter.com/ashmit2021' target='_blank' icon = {BsTwitter}/>
                            <Footer.Icon href = 'https://github.com/wellbowledash' target='_blank' icon = {BsGithub}/>
                            
                        </div>
                    </div>
        </div>
     </Footer>
  )
}
