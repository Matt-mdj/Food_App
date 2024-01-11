import Image from "next/image";


export default function Hero() {
    return (

        <section className="grid grid-cols-2">
            <div>
                <h1 className="text-4xl font-semibold">
                    Everything<br />
                    is better<br />
                    with a pizza
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
                </p>
            </div>
            <div className="relative">
                <Image src={'/Pizza.webp'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
            </div>
        </section>
    );
}