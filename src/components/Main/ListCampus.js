import ReactPlayer from 'react-player'



export default function ListCampus(props) {
    console.log(props);
  return (
    <div>
        <ul>
            {
                props.list.map((element) => {
                    return (
                        <li>{element}</li>
                    )
                })
            }
        </ul>
        <ul>
            {
                props.students.map((e) => {
                    return (
                        <li>El estudiante es {e.name} y su campus es {e.campus}</li>
                    )
                })
            }
        </ul>

        <div className="actions">
			<i className="far fa-comment"></i>
			<i className="fas fa-retweet"></i>
			<i className="far fa-heart"></i>
			<i className="fas fa-share"></i>
    	</div>

        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
    </div>
  )
}
