import Header from "@/components/header";
import About from "@/components/about";
import Myservice from "@/components/myservice"
import Project2 from "@/components/project2";
import Contacts from "@/components/contacts";
import ShowProject from "@/components/showProject";



export default function Home() {

  return (
    <div className="bg-gray-950  min-h-screen "  >
    <Header />
    <About />
    <Myservice />
    <Project2 />
    <ShowProject/>
    <Contacts/>
    

    
    
    
    
    </div>
    
  );
}
