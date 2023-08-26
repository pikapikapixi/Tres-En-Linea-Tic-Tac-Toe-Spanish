CSS (style.css):
css
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 300px;
  margin: 20px auto;
}

.cell {
  border: 1px solid #ccc;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  cursor: pointer;
}

.result {
  text-align: center;
  margin-top: 20px;
  font-size: 24px;
}

