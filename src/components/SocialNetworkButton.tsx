import WhatsAppIcon from '../assets/icons/icons8-whatsapp.svg';
import InstagramIcon from '../assets/icons/icons8-instagram-48.svg';

interface SocialNetworkButtonProps {
    type: string
}

export default function SocialNetworkButton(props: SocialNetworkButtonProps) {

    function CriarBotao(type: string) {
        switch (type) {
            case 'WhatsApp':
                return CriarBotaoWhatsApp();

            case 'Instagram':
                return CriarBotaoInstagram();
        }
    }

    function CriarBotaoWhatsApp() {
        return (
            <a href="https://api.whatsapp.com/send/?phone=98988027930&text&type=phone_number&app_absent=0" 
                className='flex items-center bg-green-500 rounded-xl p-2 w-60 duration-300 ease-in-out hover:scale-105'>
                <div className='px-1 border-r-2 border-white'>
                    <img src={WhatsAppIcon} alt="WhatsApp Icon" />
                </div>
                <div className='flex w-full justify-center'>
                    <span className='text-white font-bold'>+55 (98) 98802 7930</span>
                </div>
            </a>
        )
    }

    function CriarBotaoInstagram() {
        return (
            <a href="https://www.instagram.com/nexusaitec/" 
                className='flex items-center bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#fb7022] 
                    rounded-xl p-2 w-60 duration-300 ease-in-out hover:scale-105'>
                <div className='px-1 border-r-2 border-white'>
                    <img src={InstagramIcon} alt="Instagram Icon" />
                </div>
                <div className='flex w-full justify-center'>
                    <span className='text-white font-bold'>@nexusaitec</span>
                </div>
            </a>
        )
    }

    return (
        <>
            {CriarBotao(props.type)}
        </>
    )
}