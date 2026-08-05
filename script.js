document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. 주요 DOM 요소 불러오기
    // ==========================================
    const introPage = document.getElementById("introPage");
    const roomPage = document.getElementById("roomPage");

    const enterRoom = document.getElementById("enterRoom");
    const profileBtn = document.getElementById("profileBtn");

    const faceBtn = document.getElementById("faceBtn");
    const bodyBtn = document.getElementById("bodyBtn");

    const computerBtn = document.getElementById("computerBtn");
    const bedBtn = document.getElementById("bedBtn");
    const bookBtn = document.getElementById("bookBtn");
    const goalBtn = document.getElementById("goalBtn");

    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modalContent");
    const closeBtn = document.getElementById("closeBtn");

    // ==========================================
    // 2. 페이지 전환 기능 (첫 화면 ↔ 방 화면)
    // ==========================================
    enterRoom.addEventListener("click", () => {
        introPage.style.display = "none";
        roomPage.style.display = "block";
    });

    profileBtn.addEventListener("click", () => {
        roomPage.style.display = "none";
        introPage.style.display = "flex";
    });

    // ==========================================
    // 3. 모달 제어 함수
    // ==========================================
    function openModal(htmlContent) {
        modalContent.innerHTML = htmlContent;
        modal.style.display = "flex";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ==========================================
    // 4. 첫 화면: 프로필 클릭 (얼굴 / 몸)
    // ==========================================

    faceBtn.addEventListener("click", () => {
        const html = `
            <h1>👤 내 정보</h1>
            <div class="profileInfo">
                <p><b>이름 :</b> 전원희</p>
                <p><b>나이 :</b> 만 19세</p>
                <p><b>학교 :</b> 경기대학교</p>
                <p><b>학년 :</b> 1학년</p>
                <p><b>MBTI :</b> ISTJ</p>
                <p><b>성격 키워드 :</b> 소심함 · 느긋함 · 독립적</p>
            </div>
        `;
        openModal(html);
    });

    bodyBtn.addEventListener("click", () => {
        const html = `
            <h1>👕 상세 프로필</h1>
            <div class="twoColumn">
                <div class="leftBox">
                    <h2>✨ 잘하는 것</h2>
                    <p>✔ 계획 세우고 일정 관리</p>
                    <p>✔ 정보 정리</p>
                    <p>✔ 빠른 적응력</p>
                </div>
                <div class="rightBox">
                    <h2>💖 좋아하는 것</h2>
                    <p>🎨 취미생활하기</p>
                    <p>📝 계획 세우기</p>
                    <p>🚶 길거리 구경하며 돌아다니기</p>
                </div>
            </div>
            <div class="moto">
                <h2>🔥 Moto</h2>
                <p>작은 경험도 배움으로 삼으며 꾸준히 성장하는 사람이 되려고 노력합니다.</p>
            </div>
        `;
        openModal(html);
    });

    // ==========================================
    // 5. 방 화면: 가구 클릭 이벤트
    // ==========================================

    // [컴퓨터 - 선택 화면]
    computerBtn.addEventListener("click", () => {
        showComputerHome();
    });

    function showComputerHome() {
        const html = `
            <h1>🖥️ 컴퓨터</h1>
            <p style="text-align:center; font-size:18px; color:#666; margin-bottom:20px;">보기를 원하는 항목을 선택하세요.</p>
            <div class="select-container">
                <button class="bigChoiceBtn" id="selectGameBtn">🎮 게임</button>
                <button class="bigChoiceBtn" id="selectMovieBtn" style="background:#e74c3c;">🎬 공포영화</button>
            </div>
        `;
        openModal(html);

        document.getElementById("selectGameBtn").addEventListener("click", showGameList);
        document.getElementById("selectMovieBtn").addEventListener("click", showMovieList);
    }

    // 게임 목록 화면 (JPG 적용)
    function showGameList() {
        const html = `
            <button class="backTabBtn" id="backToCompHome">← 다른 거 선택하기</button>
            <h1>🎮 추천 게임</h1>
            <div class="card">
                <img src="sannabi.jpg" alt="산나비 이미지">
                <div class="cardContent">
                    <h2>산나비</h2>
                    <p><b>장르:</b> 사이버펑크, 액션 어드벤처, 플랫폼</p>
                    <p><b>설명:</b> 도시에 숨겨진 비밀을 밝혀내기 위해, 그리고 산나비를 찾아내 복수하기 위해 여정을 떠나는 주인공의 이야기를 다룬 스토리 중점 게임</p>
                    <p><b>좋아하는 이유:</b> 자칫 흔하게 느낄 수 있는 가족 이야기이지만, 몰입감 넘치는 감동과 여운이 남아서</p>
                    <p><b>추천도:</b> ★★★★⯨</p>
                </div>
            </div>
            <div class="card">
                <img src="repo.jpg" alt="레포 이미지">
                <div class="cardContent">
                    <h2>레포 (RIPO)</h2>
                    <p><b>장르:</b> 코미디 공포, 협동</p>
                    <p><b>설명:</b> 괴물을 피해 제한된 시간 내에 자원을 훔쳐 탈출하는 최대 6인 협동 공포 파밍 게임</p>
                    <p><b>좋아하는 이유:</b> 평소 공포 장르를 좋아하는 데다, 친한 친구들과 함께하여 예측 불가능한 상황까지 터져서 재밌게해서</p>
                    <p><b>추천도:</b> ★★★★★</p>
                </div>
            </div>
        `;
        modalContent.innerHTML = html;
        document.getElementById("backToCompHome").addEventListener("click", showComputerHome);
    }

    // 영화 목록 화면 (JPG 적용)
    function showMovieList() {
        const html = `
            <button class="backTabBtn" id="backToCompHome">← 다른 거 선택하기</button>
            <h1>🎬 추천 공포영화</h1>
            <div class="card">
                <img src="nundongja.jpg" alt="눈동자 이미지">
                <div class="cardContent">
                    <h2>눈동자 (2026)</h2>
                    <p><b>개봉년도:</b> 2026년</p>
                    <p><b>줄거리:</b> 점차 시력을 잃어가는 주인공이 완전히 어둠에 갇히기 전, 쌍둥이 동생의 의문스러운 죽음에 숨겨진 진실을 추적하는 영화</p>
                    <p><b>좋아하는 이유:</b> 흔한 공포물의 자극적인 스릴에 그치지 않고 범죄 스릴러를 기반으로 한 데다, 제한된 시점을 효과적으로 연출해 극상의 몰입감을 줘서</p>
                    <p><b>추천도:</b> ★★★★⯨</p>
                </div>
            </div>
            <div class="card">
                <img src="run.jpg" alt="런 이미지">
                <div class="cardContent">
                    <h2>런 (2020)</h2>
                    <p><b>개봉년도:</b> 2020년</p>
                    <p><b>줄거리:</b> 몸이 불편한 딸 클로이가 자신을 돌봐주던 엄마의 비밀을 알게 되면서 진실을 파헤치는 이야기.</p>
                    <p><b>좋아하는 이유:</b> 엄마인 줄 알았던 사람이 사실 자신을 납치한 사람이었다는 설정이 처음 봤을 때 신선하고 충격적이어서 좋아한다.</p>
                    <p><b>추천도:</b> ★★★★</p>
                </div>
            </div>
        `;
        modalContent.innerHTML = html;
        document.getElementById("backToCompHome").addEventListener("click", showComputerHome);
    }

    // [침대]
    bedBtn.addEventListener("click", () => {
        const html = `
            <h1>🛏️ 침대</h1>
            <div class="twoColumn">
                <div class="leftBox">
                    <h2>평소생활</h2>
                    <p><b>🌙 수면 :</b> 평균 6~7시간</p>
                    <p><b>📖 독서 :</b> 가장 최근에 읽었던 책</p>
                    <div style="background:#f2f2f2; padding:12px; border-radius:8px; margin-top:8px;">
                        <p style="font-size:15px; margin:4px 0;">• <b>제목:</b> 누굴 죽였을까 (정해연)</p>
                        <p style="font-size:14px; color:#555; margin:4px 0;">• <b>내용:</b> 고등학생 시절 벌인 살인·시신 유기 사건이 9년 후 연쇄 살인으로 이어지며, 그날 밤의 진짜 피해자를 밝혀내는 이야기</p>
                    </div>
                </div>
                <div class="rightBox">
                    <h2>휴식</h2>
                    <p><b>🎬 넷플 :</b> 싱크홀, 베테랑, 검사외전, 슬기로운 감빵생활 등등</p>
                    <p><b>🧩 취미생활 :</b> 게임, 영화, 유튜브</p>
                </div>
            </div>
        `;
        openModal(html);
    });

    // [책장]
    bookBtn.addEventListener("click", () => {
        const html = `
            <h1>📚 책장</h1>
            <div class="twoColumn">
                <div class="leftBox">
                    <h2>공부하는 것</h2>
                    <p><b>🐍 파이썬 :</b> 기초 문법 복습 및 알고리즘 구현 연습 중</p>
                    <p><b>⚙️ C언어 :</b> 메모리 구조와 포인터 개념을 다지며 학습 중</p>
                </div>
                <div class="rightBox">
                    <h2>배우고 싶은 것</h2>
                    <p><b>🐧 리눅스</b></p>
                    <p><b>📱 앱 만들기</b></p>
                    <p><b>🎮 게임 만들기</b></p>
                </div>
            </div>
        `;
        openModal(html);
    });

    // [목표]
    goalBtn.addEventListener("click", () => {
        const html = `
            <h1>🎯 Goal</h1>
            <div class="goalBox">
                <h2 style="text-align:left; color:#d9534f; margin-bottom:12px;">나만의 앱&웹사이트 제작</h2>
                <p>
                    코드를 작성할 때 다른 프로그램이나 AI를 계속 오가며 오류를 찾아야 하는 불편함을 줄이고 싶습니다.
                </p>
                <p style="margin-top:10px;">
                    제가 만들고 싶은 프로그램은 코드를 작성하는 과정에서 발생한 오류를 AI가 분석하고, 어디에서 실수가 발생했는지와 어떻게 수정할 수 있는지를 알려주는 <b>AI 기반 코딩 프로그램</b>입니다.
                </p>
            </div>
        `;
        openModal(html);
    });
});