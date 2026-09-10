import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/logo.png" alt="Sisyphe" width={32} height={32} className="w-full h-full object-cover object-left" />
          </div>
          <span className="font-black text-ink text-sm">Sisyphe</span>
        </div>
        <p className="text-xs text-gray">© {new Date().getFullYear()} Sisyphe — جميع الحقوق محفوظة</p>
      </div>
    </footer>
  )
}
