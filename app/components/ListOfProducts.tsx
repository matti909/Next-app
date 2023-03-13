import useFetch from "../hooks/useFetch"

const endPoint = "/products?populate=*"



export const ListOfProducts=(props:any)=> {
	const { data, loading, error } = useFetch(endPoint);
	console.log(data);

	return (
		data?.map(el => (
			<article key={ el.id }>
				{props.children}
				<h1>Products</h1>
			</article>
		
		))
	)
}