<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>나를 소개합니다</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: "맑은 고딕", sans-serif;
}

body{
    background:#f5f7fa;
    color:#333;
}

header{
    background:linear-gradient(135deg,#6a8dff,#8f6cff);
    color:white;
    text-align:center;
    padding:60px 20px;
}

header img{
    width:180px;
    height:180px;
    border-radius:50%;
    object-fit:cover;
    border:5px solid white;
    margin-bottom:20px;
}

section{
    width:80%;
    max-width:900px;
    margin:40px auto;
    background:white;
    padding:30px;
    border-radius:15px;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
}

h2{
    margin-bottom:15px;
    color:#6a5acd;
}

ul{
    padding-left:20px;
}

.card{
    display:inline-block;
    background:#ececff;
    padding:10px 20px;
    border-radius:20px;
    margin:5px;
}

footer{
    text-align:center;
    padding:30px;
    color:#777;
}
</style>

</head>

<body>

<header>

<img src="https://via.placeholder.com/180" alt="프로필">

<h1>안녕하세요!</h1>

<p>저는 OOO입니다 😊</p>

</header>

<section>

<h2>🙋 자기소개</h2>

<p>
안녕하세요.
저는 웹 개발을 배우고 있는 대학생입니다.
새로운 것을 배우는 것을 좋아하고,
HTML, CSS, JavaScript를 공부하고 있습니다.
</p>

</section>

<section>

<h2>💻 관심 분야</h2>

<div class="card">웹 개발</div>
<div class="card">게임</div>
<div class="card">디자인</div>
<div class="card">AI</div>

</section>

<section>

<h2>🎮 취미</h2>

<ul>
<li>게임하기</li>
<li>애니 보기</li>
<li>음악 듣기</li>
<li>산책하기</li>
</ul>

</section>

<section>

<h2>📞 연락처</h2>

<p>Email : example@email.com</p>
<p>GitHub : github.com/아이디</p>

</section>

<footer>

© 2026 My Portfolio

</footer>

</body>
</html>