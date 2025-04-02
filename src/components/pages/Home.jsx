import Item from "../Item"

const Home = () => {
  return (
    <div>
      <section>
        <div className=" gap-8 mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(225px,1fr))] p-8">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </section>
    </div>
  )
}

export default Home
