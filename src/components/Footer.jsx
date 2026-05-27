import { useState } from "react";
import RakkiLove from "../assets/img/Rakki_Love_Sticker_transparent.png";

export const Footer = () => {
	const [showRakki, setShowRakki] = useState(false);

return (
		<footer className="footer mt-auto py-4 text-center">
			<p className="mb-2">
				Made with{" "}
				<i
					className="fa fa-heart text-danger"
					onClick={() => setShowRakki(!showRakki)}
					style={{ cursor: "pointer" }}
					title="Do not click the forest heart"
				/>{" "}
				by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a> and{" "}
				<a href="https://github.com/lisandromosconi">
					Lisandro H. G. Mosconi Fariña
				</a>
			</p>

			{showRakki && (
				<div className="rakki-popup mt-3">
					<img
						src={RakkiLove}
						alt="Rakki easter egg"
						className="rakki-sticker"
					/>

					<p className="text-muted mt-2 mb-0">
						Secret unlocked: Rakki approves this archive.
					</p>
				</div>
			)}
		</footer>
	);
}