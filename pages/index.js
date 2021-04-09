import Head from 'next/head';
import Avatar from '../components/Avatar';
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Google</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="flex w-full p-5 justify-between text-sm text-gray-700">
                {/* left  */}
                <div className="flex space-x-4 items-center">
                    <p className="link">About</p>
                    <p className="link">Store</p>
                </div>
                {/* right */}
                <div className="flex space-x-4 items-center">
                    <p className="link">Gmail</p>
                    <p className="link">Images</p>
                    {/* Icons */}
                    <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
                    {/* Avatar */}
                    <Avatar
                        url={
                            'https://pbs.twimg.com/profile_images/1373459766790397952/wr_a_1nv_400x400.jpg'
                        }
                    />
                </div>
            </header>
            <body></body>
        </div>
    );
}
