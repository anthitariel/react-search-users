interface SearchProps {
   value: string;
   checkChange: (value: string) => unknown;
}

function CheckTargetValueEvent(e: any): e is {target: {value: string}} {
   if (e && e.target && e.target.value) {
      return e
   }
   return e
}

export default function Search({ value, checkChange }: SearchProps) {
    function handleChange(e: unknown) {
       if (CheckTargetValueEvent(e)) {
         checkChange(e.target.value)
       }  
    }
    
    return (
              <input type="text" placeholder="Search by name..." 
              value={value} 
              name="search"
              onInput={e => handleChange(e)}/>
       )
  }