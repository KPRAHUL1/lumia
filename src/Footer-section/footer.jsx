import Email_footer from "./components/email"
import Footer_content from "./components/footer-content"
import Icon_footer from "./components/icon-footer"



export default function Footer(){
    return(
        <>
        <section className="bg-blue-600 grid grid-cols-1 ">
        <Email_footer/>
        <Footer_content/>
        <Icon_footer/>
        </section>
        </>
    )
}