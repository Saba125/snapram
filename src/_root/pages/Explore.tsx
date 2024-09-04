import GridList from "@/components/shared/GridList";
import Loader from "@/components/shared/Loader";
import { Input } from "@/components/ui/input";
import { useGetPosts } from "@/lib/react-query/queriesAndMutations";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
const Explore = () => {
  const { inView } = useInView();
  const [searchValue, setSearchValue] = useState("");
  const { data: posts } = useGetPosts();
  if (!posts) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }
  console.log(posts);

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full">Search Posts</h2>
        <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
          <img
            src="/assets/icons/search.svg"
            width={24}
            height={24}
            alt="search"
          />
          <Input
            type="text"
            placeholder="Search"
            className="explore-search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h2 className="body-bold md:h3-bold">Popular Today</h2>
        <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
          <p className="small-medium md:base-medium">All</p>
          <img
            src="/assets/icons/filter.svg
          "
            width={20}
            height={20}
            alt="filter"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-9 w-full max-w-5xl">
        {posts.map((post) => (
          <GridList posts={post} key={post} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
