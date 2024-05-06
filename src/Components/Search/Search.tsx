import React, { ChangeEvent, useState,MouseEvent, SyntheticEvent } from "react";

type Props = {};

const Search: React.FC<Props> = (props: Props): JSX.Element => {
    
  const [search, setSearch] = useState<string>("");

  const HandleChange=(e: ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value);
    console.log(e);
  }

  const onClick = (e: SyntheticEvent)=>{
    console.log(e);

  }
  
  return (
    <div>
      <input type="text" value={search} onChange={(e) => HandleChange(e)} />
    <button onClick={(e)=>onClick(e) }/>
    </div>
  );
};

export default Search;
