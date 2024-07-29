import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BoardEntity } from './Entity/board.entity';
import { CreateBoardDto } from './DTO/create.board.dto';
import { v1 as uuid } from 'uuid';
import { ReadBoardDto } from './DTO/read.board.dto';
import { GetBoardDto } from './DTO/get.board.dto';

@Injectable()
export class BoardService {
  private boards: BoardEntity[] = [];
  createBoard(createBoardDto: CreateBoardDto) {
    const { title, content } = createBoardDto;
    const board: BoardEntity = {
      id: uuid(),
      title,
      content,
    };
    this.boards.push(board);
    throw new HttpException('Created', HttpStatus.CREATED);
  }
  getBoardById(readBoardDto: ReadBoardDto) {
    const { id } = readBoardDto;
    const board = this.boards.find((value) => value.id === id);
    if (board) {
      const response: GetBoardDto = {
        title: board.title,
        content: board.content,
      };
      return response;
    } else {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }
  getAllBoard() {
    return this.boards;
  }
}
