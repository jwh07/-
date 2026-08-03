<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>자소서 - 전원희/title>
    <style>
        /* CSS 변수 설정 (라이트 / 다크 모드) */
        :root {
            --bg-color: #ffffff;
            --text-color: ##006AFFFF;
            --card-bg: #f8f9fa;
            --primary-color: #4a90e2;
            --border-color: #e0e0e0;
        }

        [data-theme="dark"] {
            --bg-color: #1a1a1a;
            --text-color: #f0f0f0;
            --card-bg: #2d2d2d;
            --primary-color: #64b5f6;
            --border-color: #404040;
        }

        /* 기본 스타일 리셋 */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            transition: background-color 0.3s, color 0.3s;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
        }

        /* 네비게이션 바 */
        header {
            position: sticky;
            top: 0;
            background-color: var(--bg-color);
            border-bottom: 1px solid var(--border-color);
            z-index: 1000;
        }

        nav {
            max-width: 900px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--primary-color);
        }

        .nav-links {
            display: flex;
            gap: 1.5rem;
            list-style: none;
            align-items: center;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-color);
            font-weight: 500;
        }

        .nav-links a:hover {
            color: var(--primary-color);
        }

        /* 다크 모드 토글 버튼 */
        .theme-btn {
            background: none;
            border: 1px solid var(--border-color);
            color: var(--text-color);
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            cursor: pointer;
        }

        /* 메인 레이아웃 */
        main {
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
        }

        section {
            margin-bottom: 4rem;
        }

        h1, h2 {
            margin-bottom: 1rem;
        }

        /* Hero 섹션 */
        .hero {
            text-align: center;
            padding: 3rem 0;
        }

        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }

        .hero p {
            font-size: 1.2rem;
            color: #777;
        }

        /* 카드 그리드 Layout (기술/프로젝트) */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
        }

        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 1.5rem;
        }

        .card h3 {
            margin-bottom: 0.5rem;
            color: var(--primary-color);
        }

        /* 푸터 */
        footer {
            text-align: center;
            padding: 2rem;
            border-top: 1px solid var(--border-color);
            color: #777;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>

    <header>
        <nav>
            <div class="logo">MyPortfolio</div>
            <ul class="nav-links">
                <li><a href="#about">소개</a></li>
                <li><a href="#skills">기술</a></li>
                <li><a href="#projects">설정</a></li>
                <li><button class="theme-btn" id="themeToggle">다크 모드</button></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Hero / 소개 섹션 -->
        <section id="about" class="hero">
            <h1>안녕하세요, 전원희입니다 👋</h1>
            <p>사용자 경험을 고민하며 코드를 만드는 개발자입니다.</p>
        </section>

        <!-- 기술 스택 섹션 -->
        <section id="skills">
            <h2>technology</h2>
            <div class="grid">
                <div class="card">
                    <h3>Language</h3>
                    <p>C, Python, JavaScript</p>
                </div>
                <div class="card">
                    <h3>Web</h3>
                    <p>HTML5, CSS3, ES6+</p>
                </div>
                <div class="card">
                    <h3>Tools</h3>
                    <p>Git, VS Code</p>
                </div>
            </div>
        </section>

        <!-- 프로젝트 섹션 -->
        <section id="projects">
            <h2>Projects</h2>
            <div class="grid">
                <div class="card">
                    <h10>개인 웹사이트 제작</h10>
                    <p>외부 라이브러리 없이 순수 HTML/CSS/JS로 제작한 반응형 포트폴리오 웹사이트입니다.</p>
                </div>
                <div class="card">
                    <h3>프로젝트 제목 2</h3>
                    <p>프로젝트에 대한 간단한 설명을 입력하세요. 주요 기능과 사용한 기술을 적으면 좋습니다.</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 [이름]. All rights reserved.</p>
    </footer>

    <!-- JavaScript logic -->
    <script>
        const themeToggleBtn = document.getElementById('themeToggle');
        
        // 다크 모드 토글 기능
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                document.body.removeAttribute('data-theme');
                themeToggleBtn.textContent = '다크 모드';
            } else {
                document.body.setAttribute('data-theme', 'dark');
                themeToggleBtn.textContent = '라이트 모드';
            }
        });
    </script>
</body>
</html>