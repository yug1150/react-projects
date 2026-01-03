import { useState } from 'react'


function App() {
const [isFollowing, setIsFollowing] = useState(false)
const [followers, setFollowers] = useState(66868)


const handleFollow = () => {
if (isFollowing) {
setFollowers(followers - 1)
} else {
setFollowers(followers + 1)
}
setIsFollowing(!isFollowing)
}


return (
<div className="card">
<div className="profile">
<div className="avatar">200 × 200</div>


<div className="info">
<h2>Chrisse</h2>
<p className="address">4018 Sachs Trail</p>


<div className="st=ats">
<div>
<strong>Posts</strong>
<span>1841</span>
</div>
<div>
<strong>Followers</strong>
<span>{followers}</span>
</div>
</div>
</div>


<button className="follow-btn" onClick={handleFollow}>
{isFollowing ? 'Following' : 'Follow'}
</button>
</div>
</div>
)
}


export default App