import githubImage from '../assets/img2/github-mark-white.png'
import linkedin from '../assets/img2/In-Blue-48@2x.png'

export function Footer(){
return (
<div className="footer">
<div className="footer-box1">
<p>LA</p>
<div className="line"></div>
<img src={githubImage} alt="not found" />
<img src={linkedin} alt="not found" />
</div>
<div className="footer-box2">
<p>This website is for the creator’s educational purposes only. It does not allow any users to access it.</p>
</div>
</div>
)
}


