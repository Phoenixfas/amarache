import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { BsCart2 } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { IoSearchOutline } from 'react-icons/io5'
import { products } from '../data/products'
import { useAppSelector } from '@/redux/hooks'

export default function Navbar() {
    const router = useRouter()
    const [filteredData, setFilteredData] = useState([]);
    const [word, setWord] = useState("");
    const data = products
    const cart = useAppSelector(state => state.cart)

    useEffect(() => {
        const input = document.getElementById('nav-search')
        
        if(word === "") {
            setFilteredData([])
        }
        if(word !== "") {
            setFilteredData( data.filter((product) => product.name.toLowerCase().includes(word.toLowerCase())))
        }

        input.addEventListener('focusout', () => {
            setFilteredData([])
        })

        return () => {
            input.removeEventListener('focusout', () => {
                setFilteredData([])
            })
        }

    }, [word, data])


    const clearSearch = () => {
    setFilteredData([])
    setWord("")
    }


  return (
    <div className='nav'>
        <div className="nav__l">
            <Link href='/'>
                <Image src='/images/logo/Logo8_t.svg' alt={"AMARACHE"} width={200} height={70} priority />
            </Link>
        </div>
        <div className="nav__m">
            <div className='navsearch__con'>
                <input  id='nav-search' className='navsearch__input' type="text" placeholder='Search a product' value={word} onChange={(e => setWord(e.target.value))} />
                <IoSearchOutline  id='nav-search-icon' className='navsearch_icon' />
            </div>
            {filteredData.length != 0 && (
                <div className='searchResult' >
                    {filteredData && filteredData.slice(0, 10).map((product, index) => (
                        <div className='searchResult__con' key={index}>
                            <p id='product-search' onClick={() => {
                                // router.push(`/products/${product.id}`)
                                clearSearch()
                                }} 
                            >
                                {product.name.substr(0, 50)}
                                {/* {new Date(product.date).toLocaleDateString('en-US', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'})} */}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
        <div className="nav__r">
            <div className="nav__cart">
                <BsCart2 size={30} />
                <p>{cart.length}</p>
                {/* <p>12</p> */}
            </div>
        </div>
    </div>
  )
}
