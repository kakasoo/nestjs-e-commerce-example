# nestjs-e-commerce

e-commerce 프로젝트를 진행하기 위한 B.E. 설정 및 기본 코드를 구현합니다.  
B.E.나 F.E. 구분할 것 없이 양자에게 도움이 되기를 바랍니다.  
더 나은 방법, 기능 추가 등은 아래로 문의주시면 감사하겠습니다.

email : kscodebase@gmail.com

# How to use?

1. MySQL 설치
2. .env에 각종 값들을 모두 기입
3. 아래 명령어로 tables를 MySQL 상에 synchronize.

   ```bash
   $ npm run schema:sync # 정의된 entity들을 즉시 생성합니다.
   ```

4. 서버 실행 후 F.E. 에 자유롭게 연동
   ```bash
   $ npm run start:dev # 또는 npm run start
   ```

추후 pm2나 swagger 문서 등을 다루는 법을 기재합니다.
