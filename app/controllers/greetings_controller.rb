class GreetingsController < ApplicationController
  def index
    @greeting = Greeting.all.sample.message

    respond_to do |format|
      format.html
      format.json { render json: { data: @greeting, status: 200 } }
    end
  end
end
