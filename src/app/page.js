import AddUsers from "./components/AddUsers";
import DisplayUsers from "./components/DisplayUsers";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <AddUsers/>
      <DisplayUsers/>
      <Footer/>
    </main>
  )
}
