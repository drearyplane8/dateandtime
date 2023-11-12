#include <stdio.h>
#include <sysinfoapi.h>

int main(){
    //create a memory leak
    int * memoryLeak = malloc(1024);
    SYSTEMTIME lt;
    GetLocalTime(&lt);
    return lt.wHour;
}