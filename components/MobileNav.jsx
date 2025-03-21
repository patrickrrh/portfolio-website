import { Sheet, SheetContent, SheetClose, SheetTrigger } from '../components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import Nav from './Nav'
import Logo from './Logo'


const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='py-16'>
          <Nav
            containerStyles='flex flex-col items-center gap-y-10'
            linkStyles='text-2xl'
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav