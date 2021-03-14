import Link from 'next/link'

const Index = () => {
  // console.log(`**Running Index`)
  return (
    <div>
      <h1>Our index page</h1>
      <Link href="/about">
        {/*  */}
        <a>About</a>
      </Link>
      <Link href="/contact">
        {/*  */}
        <a>Contact</a>
      </Link>  
    </div>
  )
}

export default Index;