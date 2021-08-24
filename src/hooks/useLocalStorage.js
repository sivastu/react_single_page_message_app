import React,{useEffect,useState} from 'react';

const PREFIX = 'whatsapp-clone-';
	
export default function useLocalStorage(key,initialValue){
	const prefixedKey = PREFIX + key ;
	const [Value, setValue] = useState(()=>{
	const jsonValue = localStorage.getItem(prefixedKey);
		if(jsonValue != null) return JSON.parse(jsonValue)
		if (typeof initialValue === 'function') {
			return initialValue()
		}else{
			return initialValue
		}
	})
	useEffect(() => {
		localStorage.setItem(prefixedKey,JSON.stringify(Value))
	},[prefixedKey,Value])
	
	return [Value, setValue];
}