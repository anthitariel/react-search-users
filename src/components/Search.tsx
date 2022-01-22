interface SearchProps {
   value: string;
   checkChange: (value: string) => unknown;
}

export default function Search({ value, checkChange }: SearchProps) {
    function handleChange(e: any) {
       checkChange(e.target.value)
    }
    
    return (
              <input type="text" placeholder="Search by name..." 
              value={value} 
              name="search"
              onInput={e => handleChange(e)}/>
       )
  }