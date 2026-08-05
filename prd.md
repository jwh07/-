<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PROFILE | ISTJ</title>
    <style>
        :root {
            --bg-color: #0f172a;
            --card-bg: #1e293b;
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --accent: #38bdf8;
            --accent-hover: #0284c7;
            --badge-bg: #334155;
            --border: #334155;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-primary);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            width: 100%;
            max-width: 460px;
            background-color: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            overflow: hidden;
        }

        /* Header Section */
        .profile-header {
            padding: 36px 28px 24px;
            background: linear-gradient(180deg, rgba(56, 189, 248, 0.1) 0%, rgba(30, 41, 59, 0) 100%);
            border-bottom: 1px solid var(--border);
            text-align: center;
        }

        .mbti-badge {
            display: inline-block;
            background-color: var(--accent);
            color: #0f172a;
            font-weight: 700;
            font-size: 0.8rem;
            padding: 4px 12px;
            border-radius: 20px;
            letter-spacing: 1px;
            margin-bottom: 12px;
        }

        .profile-header h1 {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 6px;
        }

        .profile-header p {
            color: var(--text-secondary);
            font-size: 0.95rem;
        }

        /* Body Section */
        .profile-body {
            padding: 28px;
        }

        .info-section {
            margin-bottom: 24px;
        }

        .label {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-secondary);
            margin-bottom: 8px;
            font-weight: 600;
        }

        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .info-item {
            background-color: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border);
            padding: 12px 14px;
            border-radius: 12px;
        }

        .info-item .val {
            font-size: 0.95rem;
            font-weight: 600;
        }

        /* Tag List */
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .tag {
            background-color: var(--badge-bg);
            color: var(--text-primary);
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 0.85rem;
        }

        .tag.highlight {
            background-color: rgba(56, 189, 248, 0.15);
            color: var(--accent);
            border: 1px solid rgba(56, 189, 248, 0.3);
        }

        /* Interactive Button */
        .toggle-btn {
            width: 100%;
            padding: 14px;
            background-color: var(--accent);
            color: #0f172a;
            border: none;
            border-radius: 12px;
            font-size: 0.95rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s ease;
            margin-top: 8px;
        }

        .toggle-btn:hover {
            background-color: var(--accent-hover);
            color: #ffffff;
        }

        .secret-box {
            display: none;
            margin-top: 14px;
            padding: 16px;
            background-color: rgba(255, 255, 255, 0.03);
            border: 1px dashed var(--accent);
            border-radius: 12px;
            font-size: 0.9rem;
            line-height: 1.5;
            color: var(--text-primary);
        }

        .secret-box strong {
            color: var(--accent);
        }
    </style>
</head>
<body>

    <div class="container">
        <!-- 프로필 상단 -->
        <div class="profile-header">
            <span class="mbti-badge">ISTJ</span>
            <h1 id="name-display">[이름]</h1>
            <p>차분하고 태평하지만, 내 일은 스스로 깔끔하게 해내는 편</p>
        </div>

        <!-- 프로필 상세 -->
        <div class="profile-body">
            
            <!-- 인적사항 -->
            <div class="info-section">
                <div class="label">BASIC INFO</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="label" style="margin-bottom:2px;">소속</div>
                        <div class="val">[00대]</div>
                    </div>
                    <div class="info-item">
                        <div class="label" style="margin-bottom:2px;">전공</div>
                        <div class="val">[전공입력]</div>
                    </div>
                    <div class="info-item">
                        <div class="label" style="margin-bottom:2px;">학년</div>
                        <div class="val">1학년 (26학번)</div>
                    </div>
                    <div class="info-item">
                        <div class="label" style="margin-bottom:2px;">나이</div>
                        <div class="val">만 19세</div>
                    </div>
                </div>
            </div>

            <!-- 성격 키워드 -->
            <div class="info-section">
                <div class="label">PERSONALITY</div>
                <div class="tags">
                    <span class="tag">#느긋함</span>
                    <span class="tag">#태평함</span>
                    <span class="tag">#독립적</span>
                    <span class="tag">#내향적</span>
                    <span class="tag">#소심함</span>
                </div>
            </div>

            <!-- 좋아하는 것 -->
            <div class="info-section">
                <div class="label">LIKES</div>
                <div class="tags">
                    <span class="tag highlight">🎮 게임하기</span>
                    <span class="tag highlight">🎬 공포영화 보기</span>
                </div>
            </div>

            <!-- 내가 잘하는 것 토글 -->
            <button class="toggle-btn" onclick="toggleSkill()">⚡ 내가 잘하는 것 확인하기</button>
            <div class="secret-box" id="skill-box">
                👻 <strong>공포영화 볼 때 안 놀라고 무덤덤하게 보기</strong><br>
                🛠️ <strong>한 번 시작한 일이나 과제는 혼자서 깔끔하게 끝내기</strong>
            </div>

        </div>
    </div>

    <script>
        function toggleSkill() {
            const box = document.getElementById('skill-box');
            if (box.style.display === 'block') {
                box.style.display = 'none';
            } else {
                box.style.display = 'block';
            }
        }
    </script>
</body>
</html>