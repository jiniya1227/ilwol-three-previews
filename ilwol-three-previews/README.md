# 일월 홈페이지 3종 모바일 미리보기

최신 시설 사진이 반영된 독립 사이트 3종입니다. 기존 운영 사이트 대신 새 Netlify 프로젝트로 연결합니다.

## 1. GitHub Desktop 업로드

1. GitHub Desktop에서 `File > New repository`를 선택합니다.
2. Name은 `ilwol-three-previews`로 입력합니다. Local path는 원하는 보관 위치로 정하고 `Create repository`를 누릅니다.
3. `Repository > Show in Explorer`로 새 저장소 폴더를 엽니다.
4. 이 준비 폴더 안의 `honey`, `warm`, `sage`, `README.md`, `.gitignore`를 새 저장소 폴더 안으로 복사합니다. 폴더 전체를 한 단계 더 넣지 말고 내용물을 복사합니다.
5. GitHub Desktop으로 돌아가 Summary에 `일월 홈페이지 3종 미리보기`를 입력하고 `Commit to main`을 누릅니다.
6. `Publish repository`를 누릅니다. `Keep this code private`는 선택한 상태로 게시해도 됩니다.

## 2. Netlify 연결 — 총 세 번

Netlify 대시보드에서 `Add new project > Import an existing project > GitHub`를 선택하고 방금 올린 `ilwol-three-previews` 저장소를 선택합니다. 저장소가 보이지 않으면 Netlify GitHub 연동에 해당 저장소 접근 권한을 추가합니다.

| 설정 | 웃음가득 | 햇살마루 | 편백정원 |
|---|---|---|---|
| Branch | main | main | main |
| Base directory | honey | warm | sage |
| Build command | 비움 | 비움 | 비움 |
| Publish directory | . | . | . |
| Functions directory | netlify/functions | netlify/functions | netlify/functions |

각 버전마다 새 프로젝트를 만듭니다. Base directory를 먼저 지정한 다음 나머지 값을 확인합니다. 각 폴더의 netlify.toml에도 게시 및 함수 설정이 들어 있습니다. 첫 배포 후 함수가 인식되고 메인 및 시설 안내 페이지가 열리는지 확인합니다.

현재 운영 중인 `ilwol-daycare` 프로젝트의 저장소 연결이나 배포 설정은 변경하지 않습니다.

## 3. 카톡으로 비교

각 새 프로젝트의 실제 배포 주소를 복사해 아래처럼 보냅니다. 프로젝트 이름은 주소 사용 가능 여부에 따라 달라지므로 배포 화면에 표시된 주소를 사용합니다.

웃음가득: [실제 배포 주소]
햇살마루: [실제 배포 주소]
편백정원: [실제 배포 주소]

휴대폰에서 메뉴, 시설 사진 좌우 이동, 확대 보기, 비용 계산을 확인합니다. 카톡 미리보기 썸네일이 비슷해도 본문에 버전 이름을 함께 적으면 구분할 수 있습니다.

## 이후 수정

새 저장소의 해당 버전 파일 수정 → GitHub Desktop에서 Commit → Push origin 순서로 반영합니다. GitHub 연동이 완료되면 Netlify가 해당 프로젝트를 자동 배포합니다.

미리보기용 robots.txt는 검색 수집을 막도록 설정했습니다. 접근 제한이나 비밀번호 기능은 아닙니다. 정식 운영 버전으로 선정할 때는 운영 사이트용 검색 설정을 사용합니다.

공식 안내: https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop
Netlify: https://docs.netlify.com/start/quickstarts/deploy-from-repository/
