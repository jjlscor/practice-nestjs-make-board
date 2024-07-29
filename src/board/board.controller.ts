import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './DTO/create.board.dto';
import { ReadBoardDto } from './DTO/read.board.dto';
import { GetBoardDto } from './DTO/get.board.dto';

@Controller('board')
export class BoardController {
  private boardService: BoardService;
  constructor() {
    this.boardService = new BoardService();
  }
  @Post('create')
  createBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.createBoard(createBoardDto);
  }
  @Get('read')
  getBoardById(@Query() readBoardDto: ReadBoardDto): GetBoardDto {
    return this.boardService.getBoardById(readBoardDto);
  }
  @Get('allread')
  getAllBoard() {
    return this.boardService.getAllBoard();
  }
}
